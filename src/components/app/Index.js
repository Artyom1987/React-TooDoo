import React, {useState} from 'react';
import   "./Style.css"


let initTasks = [
    {id: 1, title: "Сходить в туалет", done: false},
    {id: 2, title: "Почистить зубы", done: false},
    {id: 3, title: "Попить воды", done: false},
    {id: 4, title: "Позавтракать", done: false}
];


const App = () => {
    const [newTasks, setNewTasks] = useState("");
    const [tasks, setTasks] = useState(initTasks);


    const taskChanges = (el) => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, done: !item.done} : item));
    };
    const enterNewTask = (e) => setNewTasks(e.target.value);
    const newTask = () => {
        // const taskObj = {id: tasks.length + 1,title:newTasks,done: false};
        // console.log(taskObj);
        // const newTaskArr = tasks.concat([taskObj]);
        // console.log(newTaskArr);
        // setTasks(newTaskArr);
        // setTasks(tasks.concat({id: tasks.length + 1,title:newTasks,done: false}));
        setTasks([...tasks, {id: tasks.length + 1, title: newTasks, done: false}])
        setNewTasks("");
    };

    return (
        <div className = "container" >
            <div className = "box" >
                <ul className={'task-list'}>
                    {
                        tasks.map(el => <li key={el.id} onClick={() => taskChanges(el)}
                                            className={el.done ? 'task-done' : ''}> {el.title}</li>)
                    }
                </ul>
            </div>

            <div className = "box" >
                <input type="text" value={newTasks} onChange={enterNewTask}/>
                <button onClick={newTask}> Add new Task</button>
            </div>
        </div>
    );
}

export default App;
