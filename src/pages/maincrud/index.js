import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Box } from "@mui/material";
import { db } from "../dbconfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const CrudImplementation = () => {
  const [rows, setRows] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const usersCollectionRef = collection(db, "users");

  const fetchUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleAdd = async () => {
    if (isEditing) {
      const userDoc = doc(db, "users", currentId);
      await updateDoc(userDoc, { name, email, age, yearOfBirth });
      setIsEditing(false);
      setCurrentId(null);
    } else {
      await addDoc(usersCollectionRef, { name, email, age, yearOfBirth });
    }
    setName("");
    setEmail("");
    setAge("");
    setYearOfBirth("");
    fetchUsers();
  };

  const handleEdit = (row) => {
    setIsEditing(true);
    setCurrentId(row.id);
    setName(row.name);
    setEmail(row.email);
    setAge(row.age);
    setYearOfBirth(row.yearOfBirth);
  };

  const handleDelete = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", flex: 0.5 },
    { field: "yearOfBirth", headerName: "Year of Birth", flex: 0.5 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 8 }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box p={2}>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Year of Birth"
          value={yearOfBirth}
          onChange={(e) => setYearOfBirth(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </Box>
  );
};

export default CrudImplementation;