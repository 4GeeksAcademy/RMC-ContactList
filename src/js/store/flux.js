
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [

			]
		},
		actions: {

			addContact: async (payload) => {
				let store = getStore();
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/rumacon/contacts`, {
						method: "POST",
						body: JSON.stringify(payload),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (!response.ok) {
						throw new Error("No agrego el contacto")
					}
					let data = await response.json();
					console.log("esta es la data que recibe de respuesta de addcontact",data)
					setStore({ ...store, contact: [...store.contact, data] });
					let storeUpdated = getStore();
					console.log("la concha", storeUpdated.contact)

				} catch (error) {
					console.log(error);
				}
			},

			deleteContact: async (handleDelete) => {
				console.log("paquete de borrado", handleDelete)
				let store = getStore();
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/rumacon/contacts/${handleDelete}`, { //Crear usuario
						method: "DELETE",
					})
					if (!response.ok) {
						throw new Error("NO BORRA")
					}
					let data = await response.json();
					console.log(data)
					setStore({ ...store, contact: [...store.contact, data] });
					let storeUpdated = getStore();
					console.log("la concha", storeUpdated.contact)


				} catch (error) {
					console.log(error);
				}
			},

			editContact: async (payload, handleEdit) => {
				console.log("paquete editado", handleEdit)
				console.log("payload enviado", payload)
				let store = getStore();
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/rumacon/contacts/${payload}`, { //Crear usuario
						method: "PUT",
						body: JSON.stringify(handleEdit),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (!response.ok) {
						throw new Error("NO SE REALIZARON LOS CAMBIOS")
					}
					let data = await response.json();
					console.log(data)
					setStore({ ...store, contact: [...store.contact, data] });
					let storeUpdated = getStore();
					console.log("la concha", storeUpdated.contact)


				} catch (error) {
					console.log(error);
				}
			},
			viewContactos: async () => {
				let store = getStore();
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/rumacon/contacts`, {
					})
					if (!response.ok) {
						throw new Error("Se quebro alv")
					}
					let data = await response.json();
					console.log("dobletea", data)
					setStore(
						{ ...store, contact: data.contacts }
					);

				} catch (error) {
					console.log(error);
				}
			},

		}
	};
}
export default getState;
