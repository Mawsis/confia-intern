import {
    User,
    BookOpenText,
    UtensilsCrossed,
    Bath,
    Settings,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { RestaurantDataTable } from "../components/RestaurantDataTable";
import { BookingDataTable } from "../components/BookingDataTable";
import { useState } from "react";

export default function Dashboard() {
    const [service, setService] = useState("Booking");
    const handleClick = (e) => {
        setService(e.target.outerText);
    };

    return (
        <Popover>
            <div className="grid grid-cols-6 gap-4 h-screen w-screen p-5">
                <div className="col-span-1 row-span-1 h-full w-full bg-[#FFF2DF] rounded-xl flex items-center justify-center">
                    <img src="./src/assets/Group.svg" alt="" />
                </div>
                <div className="col-span-5 row-span-1 h-full w-full flex bg-[#FFF2DF] rounded-xl px-10 justify-between">
                    <div className="flex items-center space-x-7 font-bold">
                        <PopoverTrigger asChild>
                            <button className="border border-[#F29E58] w-40 py-3 rounded-lg text-[#F29E58] hover:bg-[#F29E58] hover:text-white">
                                Add new
                            </button>
                        </PopoverTrigger>
                        <button className="border border-[#F29E58] bg-[#F29E58] text-[#FFF2DF] py-3 px-6 rounded-lg hover:bg-[#FFF2DF] hover:text-[#F29E58]">
                            Send Request
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex space-x-6 justify-center items-center">
                            <div className=" font-semibold">User Account</div>
                            <div className="rounded-xl bg-[#F29E58] p-2">
                                <User />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 row-[span_7_/_span_7] h-full w-full bg-[#FFF2DF] rounded-xl flex flex-col justify-between">
                    <form
                        className=" flex flex-col space-y-6 justify-start pt-7"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <button
                            className={`flex pl-11 items-center space-x-5  font-bold text-xl cursor-pointer ${
                                service === "Booking"
                                    ? "text-[#F29E58]"
                                    : "text-[#939393]"
                            }`}
                            onClick={handleClick}
                        >
                            <div>
                                <BookOpenText />
                            </div>
                            <div>Booking</div>
                        </button>
                        <button
                            className={`flex pl-11 items-center space-x-5  font-bold text-lg cursor-pointer ${
                                service === "Restaurant"
                                    ? "text-[#F29E58]"
                                    : "text-[#939393]"
                            }`}
                            onClick={handleClick}
                        >
                            <div>
                                <UtensilsCrossed />
                            </div>
                            <div>Restaurant</div>
                        </button>
                        <button
                            className="flex pl-11 items-center space-x-5 text-[#939393] font-bold text-lg"
                            onClick={handleClick}
                        >
                            <div>
                                <Bath />
                            </div>
                            <div>SPA</div>
                        </button>
                    </form>
                    <div>
                        <div className="flex pl-11 items-center space-x-5 text-[#939393] font-bold text-lg pb-7">
                            <div>
                                <Settings />
                            </div>
                            <div>Settings</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-5 row-[span_7_/_span_7] h-full w-full bg-[#F7F7F7] rounded-2xl px-3">
                    {service === "Restaurant" ? (
                        <RestaurantDataTable />
                    ) : (
                        <BookingDataTable />
                    )}
                    <PopoverContent className="w-[450px] h-[350px] flex items-center justify-center relative top-32 left-80">
                        <div className="grid gap-4">
                            <div className="space-y-2 mb-8">
                                <h4 className="font-medium leading-none">
                                    New book
                                </h4>
                            </div>
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="width">First name</Label>
                                    <Input
                                        id="width"
                                        placeholder="John"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxWidth">Last name</Label>
                                    <Input
                                        id="maxWidth"
                                        placeholder="Doe"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="height">Date</Label>
                                    <Input
                                        id="height"
                                        placeholder="12/12/2012"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxHeight">Time</Label>
                                    <Input
                                        id="maxHeight"
                                        placeholder="12h:30"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <button className="border border-[#F29E58] w-20 py-1 rounded-lg text-[#F29E58] hover:bg-[#F29E58] hover:text-white">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </div>
            </div>
        </Popover>
    );
}
