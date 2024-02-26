<template>
  <h2>LIST</h2>
  <div class="crud-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id" :name="item.nom">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.age }}</td>

          <td>
            <div class="button">
              <div class="modifier">
                <button @click="modifierItem(index)">Update</button>
              </div>
              <div class="supprimer">
                <button @click="supprimerItem(index)">Delete</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
 <h2>CREATE</h2>
    <!-- Formulaire pour ajouter ou modifier un élément -->
     <div class="form-container">
      <input type="text" v-model="nouvelID" placeholder="ID"/><br>
      <input type="text" v-model="nouvelNom" placeholder="Name"/><br>
      <input type="email" v-model="nouvelEmail" placeholder="Email"/><br>
      <input type="text" v-model="nouvelAge" placeholder="Age"/><br>
      <button @click="ajouterModifierItem">{{ enEdition ? 'Modifier' : 'Create' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      enEdition: false,
      nouvelNom: '',
      nouvelEmail: '',
      nouvelAge: '',
      indexEdition: null
    };
  },

  methods: {
    ajouterModifierItem() {
      if (this.enEdition) {
        // Modification de l'élément existant
        this.items[this.indexEdition].name = this.nouvelNom;
        this.items[this.indexEdition].email = this.nouvelEmail;
        this.items[this.indexEdition].age = this.nouvelAge;
        this.enEdition = false;
      } else {
        // Ajout d'un nouvel élément
        this.items.push({ 
          id: this.items.length + 1, 
          name: this.nouvelNom, 
          email: this.nouvelEmail, 
          age: this.nouvelAge 
        });
      }
      // Réinitialisation des champs après l'ajout ou la modification
      this.nouvelNom = '';
      this.nouvelEmail = '';
      this.nouvelAge = '';
    },
    modifierItem(index) {
      // Remplir le formulaire avec les détails de l'élément sélectionné pour modification
      this.nouvelNom = this.items[index].name;
      this.nouvelEmail = this.items[index].email;
      this.nouvelAge = this.items[index].age;
      this.indexEdition = index;
      this.enEdition = true;
    },
    supprimerItem(index) {
      // Supprimer l'élément sélectionné
      this.items.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.crud-container {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #5b4747;
}
.modifier button{
  padding: 6px 12px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  background-color: chartreuse;

}
.supprimer button{
  padding: 6px 12px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  background-color:red;
}
.button{
  display:flex;
}

.form-container {
  margin-top: 20px;


}

.form-container input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 20px;
}

.form-container button {
  padding: 8px 16px;
}
</style>
