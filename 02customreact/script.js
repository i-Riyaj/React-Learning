const anchorTag = {
    type: 'a',
    props: {
        href: "https://google.com/search?q=wikipedia+Indianhistory",
        target: "_blank"
    },
    text: "Click Me!"
}

const root = document.getElementById('root');

function render(anchorTag, arg2){
    const a = document.createElement(anchorTag.type);

//    a.setAttribute('href', anchorTag.props.href);
//    a.setAttribute('target', anchorTag.props.target);
    for(let key in anchorTag.props){
        a.setAttribute(key, anchorTag.props.key);
    }

    a.innerText = anchorTag.text;
    arg2.appendChild(a);
}

render(anchorTag,root);