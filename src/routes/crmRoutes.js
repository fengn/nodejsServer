import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact 
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    
    //.post((req, res) =>
    //res.send('POST request successfull!!!'));
    .post(addNewContact);
    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithID)
    
    .put(updateContact)

    .delete(deleteContact);
}

export default routes;
