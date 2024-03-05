import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
export const Home = () => {
    const navigate = useNavigate();

    const navigateToSiteSelect = () => {
        navigate('/SiteSelect');
    }

    const navigateToStaffLogin = () => {
        navigate('/StaffLogin');
    }

    const navigateToRegister = () => {
    }
   
    return (
    
        <div className='image'>
          <div className='box-container'>
            <h1 >
                Welcome to the Clarington Youth Centre!
            </h1>
              <div >
                <div>
                    <button className="button1" onClick={navigateToSiteSelect}>
                         Youth Sign-In System
                    </button>
                </div>
                <div>
                    <button className="button1" onClick={navigateToRegister}>
                       New User Registration
                    </button>
                </div>
                <div>
                    <button className="button1" onClick={navigateToStaffLogin}>
                        Staff Sign-in System
                    </button>
                </div>
              </div>
            </div>
        </div>
   
    )
}

