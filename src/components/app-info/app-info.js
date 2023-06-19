import './app-info.css'

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>List of the employees</h1>
            <h2>Total number of the employees: {employees}</h2>
            <h2>Bonus will go to: {increased}</h2>
        </div>
    );
}

export default AppInfo;