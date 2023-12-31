import './textBlock.css';
import RotateLogo from './RotateLogo';
function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">THE STUDENT CHAPTER OF ISE. JSSATEB</h1>
                <p id="textblock-content">
                Samyog is a vibrant community that serves as a powerful platform for students to connect, collaborate, and engage <br></br>
         in thoughtful discussions on a wide range of topics that pique their interest. With an emphasis on fostering intellectual<br></br>
          curiosity and promoting the exchange of ideas, Samyog creates a space where students can come together to share their knowledge,<br></br>
           experiences, and opinions. Whether it's science, technology, arts, culture, or current affairs, Samyog provides a welcoming environment. 
                </p>
                <div id="rotate-logo"><RotateLogo/></div>
                <a id='learn-more' href="index.html">Learn more </a>
            </div>
        </div>
    );
}

export default TextBlock;