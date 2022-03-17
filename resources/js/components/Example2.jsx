import { Outlet } from 'react-router-dom';

function Example2() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Example2;
