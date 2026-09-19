import React, { useState } from "react";
import BlockNoteEditor from '../components/BlockNoteEditor';

export default function QuestCreatorPage() {    
    
    const updateTask = (id, field, value) => {
    }

    const handleSubmit = (e) => {
    }

    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-2">Створення квесту</h1>             
            <p className="">Спочатку заповніть основну інформацію, а потім додайте серію завдань</p>

            <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="">
                    <BlockNoteEditor 
                        key = {1}
                        initialContent = {""}
                        onChange = {(jsonContent) => updateTask(1, 'content', jsonContent)}
                    />
                </div>
            </form>
        </div>
       
    );
}