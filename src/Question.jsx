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
        <input type="radio" name="answer" id="1" value={prop[prop.count].correct_answer} />

    <label htmlFor="1" dangerouslySetInnerHTML={{__html: prop[prop.count].correct_answer}}>
                

                    </label>
</div>, <div className='radio'>
                        <input type="radio" name="answer" id="2" value={prop[prop.count].incorrect_answers[0]} />

    <label htmlFor="2" dangerouslySetInnerHTML={{__html: prop[prop.count].incorrect_answers[0]}}>
    
    </label>
                    </div>, <div className='radio'>
                        <input type="radio" name="answer" id="3" value={prop[prop.count].incorrect_answers[1]} />

                <label htmlFor="3" dangerouslySetInnerHTML={{__html: prop[prop.count].incorrect_answers[1]}}>
                
                            </label>

</div>, <div className='radio'>
                                <input type="radio" name="answer" id="4" value={prop[prop.count].incorrect_answers[2]} />

            <label htmlFor="4" dangerouslySetInnerHTML={{__html: prop[prop.count].incorrect_answers[2]}}>
                
            </label>

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
        <button type='button' className='next' onClick={prop.next} id='check'>Next</button>
        </div>
    )
}