import './index.css'

const HistoryList = props => {
  const {eachHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-con">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="app-logo-domain">
        <img className="domain-logo" src={logoUrl} alt="domain logo" />
        <p className="time-accessed">{title}</p>
        <p className="domain-text">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="but-con"
      >
        <img
          className="delete-con"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryList
