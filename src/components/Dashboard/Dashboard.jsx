import './Dashboard.css'
import profilePicture from '../../assets/man.png'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = { 
    labels: ['Run', 'Bicycle', 'Swim', 'Walk', 'Hike'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        label: 'Hour of activity',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
    
  };

const link = () => {
    alert('Link to Profile Page')
}

const Dashboard = () => {
    return(
        <div className="container-summary">
            <div className="display-card">
                <span>Hello, </span>
                <h2>Display Name</h2>
                <img src={profilePicture} alt="profile-picture" className="profile-picture" onClick={link}/>
                
                <div className="graph">
                    <Doughnut data={data} />
                </div>
                
                <div className="activity-container">
                    <div className="activity">
                        <p>Total activity:</p>
                        <span className="gray">|</span>
                        <span>99</span>                                         
                    </div>
                    <div className="activity">
                        <p>Completed:</p>
                        <span className="green">|</span>
                        <span>20</span>         
                    </div>
                </div>

                <div className="activity-container">
                     <div className="activity">
                        <p>In progress:</p>
                        <span className="yellow">|</span>
                        <span>71</span>         
                    </div>
                    <div className="activity">
                        <p>Incomplete:</p>
                        <span className="red">|</span>
                        <span>8</span>         
                    </div>  
                </div>
               
            </div>        
        </div>
    )
}
export default Dashboard