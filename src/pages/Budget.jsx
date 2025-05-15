import React, { useState } from "react";

export default function UpdateBudgetForm() {
    const [amount, setAmount] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [threshold, setThreshold] = useState("");
    const [emails, setEmails] = useState([""]);
    const [timeGrain, setTimeGrain] = useState("Monthly");
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (index, value) => {
        const updatedEmails = [...emails];
        updatedEmails[index] = value;
        setEmails(updatedEmails);
    };

    const addEmailField = () => {
        setEmails([...emails, ""]);
    };

    const handleSubmit = async () => {
        const requestBody = {
            properties: {
                category: "Cost",
                amount: parseFloat(amount),
                timeGrain,
                timePeriod: {
                    startDate,
                    endDate,
                },
                notifications: {
                    Actual_GreaterThan_80_Percent: {
                        enabled: true,
                        operator: "GreaterThan",
                        threshold: parseFloat(threshold),
                        contactEmails: emails.filter((email) => email.trim() !== ""),
                    },
                },
            },
        };
        setLoading(true);
        try {
            const res = await fetch(
                "http://192.168.1.19:8989/api/azure-budget/b8e73211-ba0b-4545-b969-b079e74c7265/serviceCost",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (!res.ok) throw new Error("Failed to update budget");
            alert("Budget updated successfully!");
            setEmails([""]);
            setAmount("");
            setStartDate("");
            setEndDate("");
            setThreshold("");
        } catch (err) {
            console.error(err);
            alert("Error updating budget.");
        } finally {
            setEmails([""]);
            setAmount("");
            setStartDate("");
            setEndDate("");
            setThreshold("");
            setLoading(false);
        }
    };

    return (
        <>

            {loading ? <div className="flex h-screen flex-1 bg-[#0f1015] justify-center items-center ">
                < div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin" ></div >
            </div > : <>
                <div className="space-y-6 bg-black flex-1 px-16 pt-12">
                    <h1 className="text-4xl text-white font-bold">
                        Update Budget Configuration
                    </h1>

                    {/* Amount */}
                    {/* Date Range */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-lg text-gray-300 mb-1">
                                Enter Amount (INR)
                            </label>
                            <input
                                type="number"
                                className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-300 mb-1">Start Date</label>
                            <input
                                type="date"
                                className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-300 mb-1">End Date</label>
                            <input
                                type="date"
                                className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                        {/* Threshold */}

                        <div>
                            <label className="block text-lg text-gray-300 mb-1">
                                Threshold (%)
                            </label>
                            <input
                                type="number"
                                className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600"
                                value={threshold}
                                onChange={(e) => setThreshold(e.target.value)}
                            />
                        </div>

                        {/* Email Inputs */}
                        <div>
                            <label className="block text-lg text-gray-300 mb-1">
                                Notification Emails
                            </label>
                            {emails.map((email, idx) => (
                                <input
                                    key={idx}
                                    type="email"
                                    placeholder={`Email ${idx + 1}`}
                                    className="w-full bg-[#1E1E1E] text-white p-3 mb-2 rounded-md border border-gray-600"
                                    value={email}
                                    onChange={(e) => handleEmailChange(idx, e.target.value)}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={addEmailField}
                                className="mt-1 text-sm text-blue-400 underline"
                            >
                                + Add another email
                            </button>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Update Budget
                        </button>
                    </div>
                </div>
            </>
            }
        </>);
}
