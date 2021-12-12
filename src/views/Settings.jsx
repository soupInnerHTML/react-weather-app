

const Settings = () => {
    return (
        <div className="settings">
            <a data-target='dropdown1' className="dropdown-trigger btn btn-floating btn-large waves-effect white">
                <i className="material-icons blue-text">settings</i>
            </a>

            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                { /* <li className="divider" tabindex="-1"></li> */ }
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
            </ul>
        </div>
    )
}

export default Settings
