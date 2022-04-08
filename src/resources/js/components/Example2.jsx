import { Outlet } from 'react-router-dom';

function Example2() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component 2 with children</div>

                        <div className="card-body">
                            <Outlet />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Example2;