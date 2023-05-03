import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className="question">
            <h2>Questions and Theirs Answers</h2>
            <hr />
            <div className="ans">
                <h6>Difference between props state ?</h6>
                <p>State is a internal factor of a component where props is a exarnal factor. props is not self dependent.</p>
            </div>
            <div className="ans">
                <h6>How usestate  works?</h6>
                <p>useSate is  a  React Hook. it takes an array and it hold 2 item. one is state and other is a function which helps to update the current state.</p>
            </div>
            <div className="ans">
                <h6>What can useeffect do without dataloading?</h6>
                <p>useEffect allows to perform sideeffect in components. it retrieve data and calls api and fetch data.</p>
            </div>
            <div className="ans">
                <h6>How does react works?</h6>
                <p>React compare two trees and provide ReactDOM with instructions to sync anything that has changed, which results in adding items to the UI.</p>
            </div>

        </div>
    );
};

export default Question;