//creation interface

interface Contact {
    name: string,
    telephone: string
}

//pascale convontion
let createContact=(contact:Contact) => {
   //--
   //contact.name
   //contact.telephone
}

createContact({
    name: "abdouladim",
    telephone : "0658303921"
})