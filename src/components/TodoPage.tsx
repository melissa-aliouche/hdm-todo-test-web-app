/**
 * @todo YOU HAVE TO IMPLEMENT THE DELETE AND SAVE TASK ENDPOINT, A TASK CANNOT BE UPDATED IF THE TASK NAME DID NOT CHANGE, YOU'VE TO CONTROL THE BUTTON STATE ACCORDINGLY
 */
import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('') // for he new task
  const [editingTasks, setEditingTasks] = useState<{ [key: number]: string }>({});

  const handleFetchTasks = async () => {
    const fetchedTasks = await api.get('/tasks');
    setTasks(fetchedTasks);
    const initialEditingTasks = fetchedTasks.reduce((acc: { [key: number]: string }, task: Task) => {
      acc[task.id] = task.name;
      return acc;
    }, {});
    setEditingTasks(initialEditingTasks);
  }
  const handleDelete = async (id: number) => {
    // @todo IMPLEMENT HERE : DELETE THE TASK & REFRESH ALL THE TASKS, DON'T FORGET TO ATTACH THE FUNCTION TO THE APPROPRIATE BUTTON
    try{
      await api.delete(`/tasks/${id}`); // Appeler l'API
      handleFetchTasks(); // Rafraichir la liste
    }catch (error){
      console.error("The task could not be deleted: ", error);
    }
  }

  const handleSave = async (task: Task) => {
    // @todo SAVE THE TASK & REFRESH ALL THE TASKS, DON'T FORGET TO ATTACH THE FUNCTION TO THE APPROPRIATE BUTTON 
    if (task.name === editingTasks[task.id]) return;
    try{
      const updatedTaskData = { name: editingTasks[task.id] || task.name };
      await api.patch(`/tasks/${task.id}`,updatedTaskData); // mettre à jour la tâchee
      handleFetchTasks();
    }catch(error){
      console.error("The task could not be saved:",error);

    }

  }

  // ajouter une tâche
  const handleAddTask = async () => {
    if (newTask.trim() === '') return; // Do not add an empty task
    const newTaskData = {
      name: newTask,
    }
    try{
      await api.post('/tasks', newTaskData);
      setNewTask('');
      handleFetchTasks();
    } catch(error){
      console.error('The task could not be added:', error);
    }
  };

  useEffect(() => {
    (async () => {
      handleFetchTasks();
    })();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>

      <Box justifyContent="center" mt={5} flexDirection="column">
        {
          tasks.map((task) => (
            <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%" key={task.id}>
              <TextField size="small" value={editingTasks[task.id]} fullWidth sx={{ maxWidth: 350 } } 
                onChange={(e) => setEditingTasks({ ...editingTasks, [task.id]: e.target.value })}
              />
              <Box>
                <IconButton color="success" disabled={task.name === editingTasks[task.id]} onClick={() => handleSave(task)}>
                  <Check />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(task.id)}>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          ))
        }

        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <TextField label="Nouvelle tâche" variant='outlined' value={newTask}
           onChange={(e) => setNewTask(e.target.value)} fullWidth sx={{ maxWidth:300, marginRight:1}}
          />
          <Button variant="outlined" onClick={handleAddTask}>Ajouter une tâche</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default TodoPage;
