import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <>
            <section className="intro">
                <div className="bg-image h-100" style={{ backgroundColor: '#f5f7fa' }}>
                    <div className="mask align-items-center">
                        <div className="">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '700px' }}>
                                                <table className="table table-striped mb-0">
                                                    <thead style={{ backgroundColor: '#002d72' }}>
                                                        <tr>
                                                            <th scope="col">Sn</th>
                                                            <th scope="col">ProductName</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Ingrediants</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Chaumin</td>
                                                            <td>120</td>
                                                            <td>Cabbage,Noodles</td>
                                                            <td className="actionButton">
                                                                <button className="btn btn-sm viewBtn">View</button>
                                                                <button className="btn btn-sm DeleteBtn">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Chaumin</td>
                                                            <td>120</td>
                                                            <td>Cabbage,Noodles</td>
                                                            <td className="actionButton">
                                                                <button className="btn btn-sm viewBtn">View</button>
                                                                <button className="btn btn-sm DeleteBtn">Delete</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;