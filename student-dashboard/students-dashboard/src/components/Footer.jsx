import './Footer.css'

import React from 'react'

function Footer() {
    return (
        <footer class="app-footer">
            <h3>React Concepts Used in This Page</h3>
            <ul class="concepts-list">
                <li>
                    <strong>Props:</strong>
                    StudentCard receives the student object as a prop. SubjectList receives the subjects array as a prop.
                </li>
                <li>
                    <strong>Children:</strong>
                    The Card component uses the children prop to wrap StudentCard's content in a styled container.
                </li>
                <li>
                    <strong>Iteration (.map):</strong>
                    App.tsx maps over the students array to render multiple StudentCards. SubjectList maps over the subjects array to render tags.
                </li>
                <li>
                    <strong>Conditional Rendering:</strong>
                    Ternary operators for Online/Offline and Pass/Fail. Logical AND (&amp;&amp;) for the Honor Roll badge.
                </li>
            </ul>
        </footer>
    )
}

export default Footer