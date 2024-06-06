import React from 'react';

class CopyExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { copySuccess: '' }
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
    };

    render() {
        return (
            <div>

                <form>
                    <textarea
                        ref={(textarea) => this.textArea = textarea}
                        value='5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC'
                    />
                </form>
                {
                    /* Logical shortcut for only displaying the 
                       button if the copy command exists */
                    document.queryCommandSupported('copy') &&
                    <div className='d-flex-col align-center '>
                        <button className='copy-button' onClick={this.copyToClipboard}>COPY</button>
                        {this.state.copySuccess}
                    </div>
                }
            </div>
        );
    }

}

export default CopyExample;