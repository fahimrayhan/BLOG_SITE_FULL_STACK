import React from 'react'

export default function NewPost() {
    return (
        <div>
            <form>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" required />
                <label htmlFor="post">Post: </label>
                <textarea name="post" id="post"/>
                <select>
                    <option value="Fahim Rayhan">Fahim Rayhan</option>
                    <option value="Shafayat Anabil">Shafayat Anabil</option>
                    <option value="Rizbi Prito">Rizbi Prito</option>
                    <option value="Sulaiman Sukhon">Sulaiman Sukhon</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
