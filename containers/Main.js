import { Component } from "react";
import data from "../data/questions"
import Question from "../components/Question"
import Answers from "../components/Answers"
import CalcBtn from "../components/CalcBtn"
import RightArrow from "../components/RightArrow"
import LeftArrow from "../components/LeftArrow"

import calcScore from "../lib/calcScore"


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: data,
            currentIdx: 0
        }
        this.handlePagination = this.handlePagination.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.CalculateScore = this.CalculateScore.bind(this)
    }
    CalculateScore() {
        let score = calcScore(this.state.questions)
        this.setState({ score })
    }
    handlePagination(val) {
        let nextIdx = this.state.currentIdx + val
        if (nextIdx < this.state.questions.length && nextIdx >= 0) {
            this.setState({ currentIdx: nextIdx })
        }
    }
    handleCheck(val) {
        this.setState((state) => state.questions[state.currentIdx].checked = parseInt(val))
    }

    render() {
        let checkedAns = this.state.questions[this.state.currentIdx].checked

        return (
            <div className="content">
                <div>
                    <Question ask={this.state.questions[this.state.currentIdx].question} />
                    <Answers anslist={this.state.questions[this.state.currentIdx].answers}
                        handleCheck={this.handleCheck} checkedAns={checkedAns} />
                </div>
                <div>{this.state.score}</div>
                <div>
                    <CalcBtn clicked={this.CalculateScore} />
                </div>
                <div>
                    <LeftArrow clicked={this.handlePagination} disabled={this.state.currentIdx === 0} />
                    <RightArrow clicked={this.handlePagination}
                        disabled={this.state.currentIdx === this.state.questions.length - 1} />
                </div>
                <style jsx global>{`
                    body {
                    font-family: 'Arial';
                    }
                    .content {
                        max-width: 500px;
                        margin: auto;
                        text-align: center;
                      }
                    ul {
                    padding: 0;
                    }

                    li {
                    list-style: none;
                    margin: 5px 0;
                    }

                    button {
                        background-color: 
                        padding: 15px 32px;
                        margin: 5px;
                        border: none;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 10px;
                      }
                `}</style>
            </div>
        );
    }
}

export default MainContainer;