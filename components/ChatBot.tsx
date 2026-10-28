
"use client";

import axiosInstance from "@/lib/axios";
import React, { useState } from "react";

type ChatMessage = {
    text: string;
    sender: "user" | "bot";
};

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        const text = message.trim();

        if (!text || isLoading) return;

        // إضافة رسالة المستخدم مباشرة
        setMessages((prev) => [
            ...prev,
            { text, sender: "user" },
        ]);

        setMessage("");
        setIsLoading(true);

        try {
            const res = await axiosInstance.post("/chatbot", {
                message: text,
            });

            // إضافة رد البوت تحت رسالة المستخدم
            setMessages((prev) => [
                ...prev,
                {
                    text: res.data.reply,
                    sender: "bot",
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    text: "Sorry, something went wrong. Please try again.",
                    sender: "bot",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed bottom-30 right-10 z-999 flex w-96 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

                    {/* Header */}
                    <div className="flex items-center justify-between bg-[#E14A5C] p-4 text-white">
                        <h2 className="font-semibold">
                            Market Assistant 🤖
                        </h2>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer text-xl"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex h-[390px] flex-col gap-3 overflow-y-auto p-4">

                        <div className="w-fit max-w-[85%] rounded-xl bg-gray-100 p-3 text-gray-800">
                            Hello 👋 How can I help you?
                        </div>

                        {messages.map((item, index) => (
                            <div
                                key={index}
                                className={`max-w-[85%] whitespace-pre-wrap break-words rounded-xl p-3 ${item.sender === "user"
                                    ? "self-end bg-[#E14A5C] text-white"
                                    : "self-start bg-gray-100 text-gray-800"
                                    }`}
                            >
                                {item.text}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="w-fit rounded-xl bg-gray-100 p-3 text-gray-500">
                                Typing...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend();
                        }}
                        className="flex gap-2 border-t p-3"
                    >
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            placeholder="Ask me anything..."
                            className="min-w-0 flex-1 rounded-lg border px-3 py-2 outline-none focus:border-[#E14A5C]"
                        />

                        <button
                            type="submit"
                            disabled={!message.trim() || isLoading}
                            className="rounded-lg bg-[#E14A5C] px-4 text-white transition-all duration-150 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            ➤
                        </button>
                    </form>
                </div>
            )}

            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-10 right-10 z-50 flex cursor-pointer items-center justify-center rounded-full bg-[#E14A5C] p-4 transition-all duration-300 hover:scale-110"
            >
                💬
            </button>
        </>
    );
};

export default ChatBot;
