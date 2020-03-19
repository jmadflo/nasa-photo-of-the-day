import React from 'react'

const BottomContent = (props) => {
    return(
        <>
            {/* <form>
                <label>
                Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
            </form> */}
            <p>
                {props.explanation}
            </p>
        </>
        
    )
}

export default BottomContent;