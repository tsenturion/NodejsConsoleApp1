{this.state.visible && (
    <p key={this.state.answer} className="fade-in">{this.state.answer}</p>
)}


getPrediction = () => {
    const randomIndex = Math.floor(Math.random() * this.answers.lenght);
    this.setState({ visible: false})

    setTimeout(() => {
        this.setState({
            answer: this.answers[randomIndex],
            visible: true
        })
    }, 400)
}

getPrediction = () => {
    if (this.props.mode === "shake") {
      this.setState({ shaking: true });
 
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.answers.length);
        this.setState({
          answer: this.answers[randomIndex],
          shaking: false
        });
      }, 500);
    }
    else {
      this.setState({ visible: false });
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.answers.length);
 
        this.setState({
          answer: this.answers[randomIndex],
        });
        {/*Дополнительная задержка, чтьбы успело отработать плавное пояление текста*/}
        setTimeout(() => {
          this.setState({visible:true});
        }, 100)
      }, 300);
    }
  };