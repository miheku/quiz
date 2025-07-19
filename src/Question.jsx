import '../src/question.css'
export default function Question(prop){
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
    const radioArray = [<div className='radio'>
    <label htmlFor={prop[prop.count].correct_answer} dangerouslySetInnerHTML={{__html: prop[prop.count].correct_answer}}>
                

                    </label>
<input type="radio" name="answer" id="" value={prop[prop.count].correct_answer} />
</div>, <div className='radio'>
    <label htmlFor={prop[prop.count].incorrect_answers[0]} dangerouslySetInnerHTML={{__html: prop[prop.count].incorrect_answers[0]}}>
    
    </label>
                    <input type="radio" name="answer" id="" value={prop[prop.count].incorrect_answers[0]} />
                    </div>, <div className='radio'>
                <label htmlFor={prop[prop.count].incorrect_answers[1]} dangerouslySetInnerHTML={{__html: prop[prop.count].incorrect_answers[1]}}>
                
                            </label>

<input type="radio" name="answer" id="" value={prop[prop.count].incorrect_answers[1]} />
</div>, <div className='radio'>
            <label htmlFor={prop[prop.count].incorrect_answers[2]} dangerouslySetInnerHTML={{__html: prop[prop.count].incorrect_answers[2]}}>
                
            </label>
                            <input type="radio" name="answer" id="" value={prop[prop.count].incorrect_answers[2]} />

</div>]
shuffleArray(radioArray)

const render = radioArray.map(
    item => item
)
    return(
        <div className='container'>
            <p dangerouslySetInnerHTML={{__html: prop[prop.count].question}}></p>
            <div className="answers">
                {render}
        </div>
        <button type='button' className='next' onClick={prop.next}>Next</button>
        </div>
    )
}