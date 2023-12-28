import supertest from 'supertest';
import app from '../server';

describe('tasks', () => {
  describe('get tasks route', () => {
    describe('given no tasks exist', () => {
      it('should return a 404 when searching for a task with a specific title', async () => {
        await supertest(app).get('/api/v1/tasks/search?title=abc').expect(404);
      });
    });

    describe('given nothing is passed to search', () => {
      it('should return a 200 when fetching all tasks', async () => {
        await supertest(app).get('/api/v1/tasks/search').expect(200);
      });
    });
  });

  describe('get tasks count route', () => {
    it('should return a 200 when fetching the count of tasks', async () => {
      await supertest(app).get('/api/v1/tasks/count').expect(200);
    });
  });

  describe('check if a task exists', () => {
    it('should return a 200 when checking if a task exists', async () => {
      await supertest(app).get('/api/v1/tasks/exists').expect(200);
    });
  });

  describe('get all tasks', () => {
    it('should return a 200 when fetching all tasks', async () => {
      await supertest(app).get('/api/v1/tasks').expect(200);
    });
  });

  describe('get tasks with pagination', () => {
    it('should return a 200 when fetching tasks with pagination', async () => {
      await supertest(app).get('/api/v1/tasks/pagination').expect(200);
    });
  });

  // describe('create a new task', () => {
  //   it('should return a 201 when creating a new task', async () => {
  //     const newTask = {
  //       user: 'user123',
  //       title: 'New Task',
  //       description: 'Task description',
  //       due_date: '2023-12-31',
  //       priority: 'medium',
  //     };
  //     await supertest(app).post('/api/v1/tasks').send(newTask).expect(201);
  //   });
  // });

  // describe('update a task', () => {
  //   it('should return a 200 when updating an existing task', async () => {
  //     // Replace the values with actual data for updating a task
  //     const taskId = 'taskIdToUpdate';
  //     const updatedTaskData = {
  //       title: 'Updated Title',
  //       description: 'Updated Description',
  //     };
  //     await supertest(app).patch(`/api/v1/tasks/${taskId}`).send(updatedTaskData).expect(200);
  //   });

  //   it('should return a 404 when updating a non-existing task', async () => {
  //     // Replace the taskId with a non-existing task ID
  //     const taskId = 'nonExistingTaskId';
  //     const updatedTaskData = {
  //       title: 'Updated Title',
  //       description: 'Updated Description',
  //     };
  //     await supertest(app).patch(`/api/v1/tasks/${taskId}`).send(updatedTaskData).expect(404);
  //   });
  // });

  // describe('delete a task', () => {
  //   it('should return a 204 when deleting an existing task', async () => {
  //     // Replace the taskId with an existing task ID
  //     const taskId = 'taskIdToDelete';
  //     await supertest(app).delete(`/api/v1/tasks/${taskId}`).expect(204);
  //   });

  //   it('should return a 404 when deleting a non-existing task', async () => {
  //     // Replace the taskId with a non-existing task ID
  //     const taskId = 'nonExistingTaskId';
  //     await supertest(app).delete(`/api/v1/tasks/${taskId}`).expect(404);
  //   });
  // });
});
