import { MoveRight } from "lucide-react";
function Signup() {
    return (
        <div className="login-container">
            <div className="left">
                <div className="logo">
                    <img src="./src/assets/Group.svg" alt="" />
                </div>
                <form className="form">
                    <div className="title">Lets get you started</div>
                    <div className="form-container">
                        <div className="fm">
                            <div className="label">First name</div>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="em">
                            <div className="label">Your email</div>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="ph">
                            <div className="label">Phone number</div>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter your phone"
                            />
                        </div>
                        <button className="submit">
                            Next
                            <MoveRight />
                        </button>
                    </div>
                </form>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Signup;
