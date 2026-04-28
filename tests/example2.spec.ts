import {test,expect} from '@playwright/test'

test("2.Create user via API and verify user on the UI and delete user via API",async({page,request})=>{
// Login
// Create a new user using API
// Verify user appears in UI table
// Delete the user
//Step-1: Login
const username=`user${Date.now()}`;  
await page.goto("/login");  
await page.fill("#username",username);
await page.fill("#password",'password');
await page.click("#loginBtn");
//Step-2: Create a new user using API
const response=await request.post('/api/users',
        { data:{
            username: 'user111',
            password: 'password'}
        });
expect(response.status()).toBe(201);
//Step-3: Verify user appears in UI table
const userRow=page.locator('tr',{hasText:username});
await expect(userRow).toBeVisible();

//Step-4: Delete the user
const deleteResponse=await request.delete(`/api/users/${username}`);
expect(deleteResponse.status()).toBe(200);
})