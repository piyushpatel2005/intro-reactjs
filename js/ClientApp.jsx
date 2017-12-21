const ce = React.createElement;
const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
return ce('div', null, [
  ce(MyTitle, { title: 'Game of Throes', color: 'yellowgreen' }),
  ce(MyTitle, { title: 'Strangeer Things', color: 'greenyellow' }),
  ce(MyTitle, { title: 'Silicon Valley', color: 'limegreen' })
]);
};
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
