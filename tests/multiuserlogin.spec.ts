// import { test, expect } from '@playwright/test';
// import users from '../test-data/users.qa.json';

// test.describe.parallel('Multi user logins',()=>{
    
//     users.forEach((user) =>{
//         test.(`login test for ${user.username}`, async({page})=>{
//              await page.goto('/');
//             await page.fill('#user-name', user.username);
//             await page.fill('#password', user.password);
//             await page.click('#login-button');

//             if(user.expected){
//                 await expect(page).toHaveURL(/inventory/);
//             }else{
//                 await expect(page.locator('[data-test="error"]')).toBeVisible();
//             }

//         })
//     })
// })
//Using POJO Class - Encapsulation
//import {getUsers} from '../utils/dataloader'
//const users=getUsers();
// test.describe('Multi user logins',()=>{
//     for(let user of users){
//         test(`login test for ${user.getUsername()}`, async({page})=>{
//              await page.goto('/');
//             await page.fill('#user-name', user.getUsername());
//             await page.fill('#password', user.getPassword());
//             await page.click('#login-button');

//             if(user.isValid()){
//                 await expect(page).toHaveURL(/inventory/);
//             }else{
//                 await expect(page.locator('[data-test="error"]')).toBeVisible();
//             }

//         })
//     }
// })
