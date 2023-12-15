import { MoveRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
function Setup() {
    return (
        <div className="login-container">
            <div className="left">
                <div className="logo">
                    <img src="./src/assets/Group.svg" alt="" />
                </div>
                <form className="form">
                    <div className="title">
                        Make sure to enter valid informations
                    </div>
                    <div className="form-container">
                        <div className="fm">
                            <div className="label">Hotel name</div>
                            <input type="text" placeholder="Enter hotel name" />
                        </div>
                        <div className="em">
                            <div className="label">Location</div>
                            <input type="text" placeholder="Add location" />
                        </div>
                        <div className="flex flex-col gap-3 overflow-y-auto h-28">
                            <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        cleaning services
                                    </label>
                                </div>
                            </div>
                            <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        dinning and catering
                                    </label>
                                </div>
                            </div>
                            <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        swimming pool
                                    </label>
                                </div>
                            </div>
                            <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        spa management
                                    </label>
                                </div>
                            </div>
                            <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        gym management
                                    </label>
                                </div>
                            </div>
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

export default Setup;
