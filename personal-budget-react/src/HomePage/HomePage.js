import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';


function HomePage() {
        const [pieData, setPieData] = useState({});
        let dataSource =  {
            datasets: [
                {
                    data : [],
                    backgroundColor: [
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#E0F523',
                        '#23F542',
                        '#A009F3',
                        '#09F3E8'
                    ],
                }
            ],
            labels: [],
        }
    
        useEffect (() =>{
            axios.get('http://localhost:5000/budget')
            .then(function(res){
                console.log(res.data);
                for(var i = 0; i < res.data.myBudget.length; i++) {
                    dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                    dataSource.labels[i] = res.data.myBudget[i].title;
                }
                setPieData(dataSource);
            });
        });
           

  return (
    
    <div className="container center">

        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Chart</h1>
                
                <p>
                    <Pie data={pieData} width={400} height={400} />
                </p>
            </div>

        </div>
        

    </div>
   

  );
  
}


export default HomePage;
