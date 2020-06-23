import React, {useState} from 'react';
import   "./Style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash} from '@fortawesome/free-solid-svg-icons'


let initTasks = [
    {id: 1, title: "Сходить в туалет", done: true, delete: false},
    {id: 2, title: "Почистить зубы", done: false, delete: false},
    {id: 3, title: "Попить воды", done: true, delete: true},
    {id: 4, title: "Позавтракать", done: false, delete: false}
];


const App = () => {
    const [newTasks, setNewTasks] = useState("");
    const [tasks, setTasks] = useState(initTasks);


    const taskChanges = (el) => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, done: !item.done} : item));
    };
    const taskChangesDeletes = (el) => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, delete: !item.delete} : item));
    };

    const enterNewTask = (e) => setNewTasks(e.target.value);
    const newTask = () => {
        // const taskObj = {id: tasks.length + 1,title:newTasks,done: false};
        // console.log(taskObj);
        // const newTaskArr = tasks.concat([taskObj]);
        // console.log(newTaskArr);
        // setTasks(newTaskArr);
        // setTasks(tasks.concat({id: tasks.length + 1,title:newTasks,done: false}));
        setTasks([...tasks, {id: tasks.length + 1, title: newTasks, done: false, delete:false}]);
        setNewTasks("");
    };

    return (
        <div className = "container" >
            <div className = "box" >
                <ul className="tabs-select">
                    <li className="tab-select-item" onClick={()=>{setTasks(initTasks)}}>ALL</li>
                    <li className="tab-select-item" onClick={()=>{setTasks(initTasks.filter(el => !el.done && !el.delete))}}>ToDo</li>
                    <li className="tab-select-item" onClick={()=>{setTasks(initTasks.filter(el => el.done && !el.delete))}}>Done</li>
                    <li className="tab-select-item" onClick={()=>{setTasks(initTasks.filter(el => el.delete))}}>Delete</li>
                </ul>
            </div>
            <div className = "box" >
                <ul className='task-list'>
                    {
                        tasks.map(el => (
                            <li key={el.id}  className={el.delete ? 'task-delete':''} >
                                <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare} onClick={() => taskChanges(el)} />
                                {el.title}
                                <FontAwesomeIcon icon={faTrash} onClick={() => taskChangesDeletes(el)}/>

                            </li>
                        ) )
                    }
                </ul>
            </div>

            <div className = "box" >
                <input type="text" value={newTasks} onChange={enterNewTask}/>
                <button onClick={newTask}> Add new Task</button>
            </div>
        </div>
    );
};

export default App;
