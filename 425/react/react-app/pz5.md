## Практическое задание: Custom hooks + HTTP API в React

## Цель

Научиться:

- выносить сетевую логику в **custom hook**;
- проектировать **контракт hook-а (state + commands + derived data)**;
- работать с **HTTP (`fetch`, async/await)**;
- управлять состояниями запроса:
  `idle -> loading -> success / empty / error / aborted`;
- обрабатывать **race conditions**, **abort**, **retry**;
- избавляться от `useEffect`-хаоса и строить читаемую архитектуру.

## Задание (шаги)

### 1. Подготовка данных

Создайте локальный JSON (например: `/public/data/posts.json`):

```json
{
  "items": [
    { "id": "1", "title": "React hooks", "category": "react" },
    { "id": "2", "title": "Async patterns", "category": "js" },
    { "id": "3", "title": "HTTP basics", "category": "network" }
  ]
}
```

### 2. Реализовать HTTP-клиент

Создайте файл:

```
src/lib/api.ts
```

Реализуйте функцию:

```ts
fetchPosts({ query, signal });
```

Требования:

- использовать `fetch`;
- фильтровать данные по `query`;
- поддерживать `AbortController`;
- возвращать:

```ts
{
  items,
  meta: {
    query,
    status,
    elapsedMs
  }
}
```

### 3. Создать custom hook

Создайте:

```
src/hooks/usePostsQuery.ts
```

Hook должен:

#### Хранить состояние:

```ts
status: "idle" | "loading" | "success" | "empty" | "error" | "aborted";
items: [];
error: string | null;
```

#### Поддерживать:

- автоматический запрос при изменении `query`;
- отмену предыдущего запроса;
- защиту от **устаревших ответов (race condition)**;
- retry (минимум 1 повтор при ошибке).

#### Возвращать контракт:

```ts
{
  status,
  items,
  error,
  refetch,
}
```

### 4. UI-компонент

Создайте страницу:

```
src/components/PostsPage.tsx
```

Реализуйте:

#### Поле поиска

```tsx
<input value={query} onChange={...} />
```

#### Состояния UI:

- `idle` -> "Введите запрос"
- `loading` -> skeleton / loader
- `error` -> сообщение + кнопка retry
- `empty` -> "Ничего не найдено"
- `success` -> список элементов

### 5. Реализовать Abort

При каждом новом вводе:

- предыдущий запрос должен отменяться;
- UI не должен обновляться старым ответом.

### 6. Реализовать Retry

При ошибке:

- автоматическая повторная попытка (1–2 раза);
- либо кнопка "Повторить".

### 7. Обработать race conditions

Сценарий:

- пользователь быстро вводит:

  ```
  re -> react -> retry
  ```

- результат должен соответствовать **последнему запросу**, а не любому завершившемуся.

### 8. (Дополнительно, + уровень)

- вынести retry-логику в отдельную функцию;
- добавить debounce для поиска;
- добавить `meta` в UI (время ответа, query).

## Подсказки по ключевым частям

### 1. AbortController

```ts
const controller = new AbortController();

fetch(url, { signal: controller.signal });

return () => controller.abort();
```

### 2. Защита от гонок (race condition)

```ts
const requestIdRef = useRef(0);

const requestId = ++requestIdRef.current;

if (requestId !== requestIdRef.current) return;
```

### 3. Retry (простая модель)

```ts
for (let i = 0; i <= maxRetries; i++) {
  try {
    return await fetch(...);
  } catch (e) {
    if (i === maxRetries) throw e;
  }
}
```

### 4. Разделение слоёв

Правильная архитектура:

```
lib/api.ts        -> transport (fetch)
hooks/usePostsQuery.ts -> orchestration
components/...    -> UI
```

### 5. Контракт hook-а

Hook НЕ должен отдавать:

- raw `fetch`;
- внутренние setState.

Hook должен отдавать:

- готовое состояние;
- команды (`refetch`).

## Что проверить перед отправкой (чек-лист)

- [ ] Нет `fetch` прямо в компоненте (всё через hook)
- [ ] Есть все состояния:
  - [ ] idle
  - [ ] loading
  - [ ] success
  - [ ] empty
  - [ ] error
  - [ ] aborted

- [ ] Работает отмена запроса
- [ ] Нет race condition (старый ответ не перезаписывает новый)
- [ ] Retry не срабатывает бесконечно
- [ ] UI не "мигает" некорректными данными
- [ ] Код читается как модель, а не как набор флагов
- [ ] Нет дублирования логики между компонентом и hook-ом

## Советы по улучшению работы

Не превращайте hook в «свалку логики».
Если внутри хаос — значит архитектура не улучшилась.

Думайте не про `fetch`, а про **состояние интерфейса**.
UI — это отражение состояния запроса, а не наоборот.

Не смешивайте:

- transport (HTTP)
- orchestration (hook)
- UI (component)

Если у вас появилось:

- 5+ флагов (`isLoading`, `isError`, `isEmpty` и т.д.)
- несколько `useEffect`

-> вы почти наверняка делаете архитектурную ошибку.

Race condition — это не edge-case.
Это **нормальный сценарий пользовательского ввода**.

Abort — это не оптимизация.
Это способ **не дать сломать UI устаревшими данными**.

Retry — это не "на всякий случай".
Он нужен только для **временных ошибок**.
