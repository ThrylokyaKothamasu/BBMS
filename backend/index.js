const cors=require('cors');
const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// OracleDB connection setup

const dbConfig = {
  user: 'system',
  password: 'system',
  connectString: 'localhost:/orcl',
};

// Routes
app.get('/api/donors/:id?', async (req, res) => {
  const { id } = req.params;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    let query = 'SELECT * FROM donors';
    let bindParams = [];

    if (id) {
      query += ' WHERE id = :id';
      bindParams.push(id);
    }

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      res.status(404).send('Data not found');
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


app.post('/api/donors', async (req, res) => {
  const { id, name, age, phone, bg, ml,gender, ddate } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `INSERT INTO donors (id, name, age, phone, bg,ml,gender, ddate) VALUES (:id, :name, :age, :phone, :bg, :ml, :gender, :ddate)`,
      { id, name, age, phone, bg, ml, gender, ddate },
      { autoCommit: true }
    );

    res.status(201).send('Data added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.put('/api/donors/:id', async (req, res) => {
  const id = req.params.id;
  const { name, age, phone, bg, ml, gender,ddate } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `UPDATE donors SET name = :name, age = :age, phone = :phone, bg = :bg, ml = :ml, gender = :gender, ddate = :ddate WHERE id = :id`,
      { id, name, age, phone, bg, ml,gender, ddate },
      { autoCommit: true }
    );

    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.delete('/api/donors/:id', async (req, res) => {
  const id = req.params.id;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(`DELETE FROM donors WHERE id = :id`, [id], { autoCommit: true });

    res.status(200).send('Data deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});




// CRUD operations for receiver table

app.post('/api/receiver', async (req, res) => {
  const { id, name, age, phone, bg, ml, gender, ddate, hospital } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `INSERT INTO receiver (id, name, age, phone, bg, ml, gender, ddate, hospital) VALUES (:id, :name, :age, :phone, :bg, :ml, :gender, :ddate, :hospital)`,
      { id, name, age, phone, bg, ml, gender, ddate, hospital },
      { autoCommit: true }
    );

    res.status(201).send('Data added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


// Read receiver table
app.get('/api/receiver/:id?', async (req, res) => {
  const { id } = req.params;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    let query = 'SELECT * FROM receiver';
    let bindParams = [];

    if (id) {
      query += ' WHERE id = :id';
      bindParams.push(id);
    }

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      res.status(404).send('Data not found');
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

// Update receiver table
app.put('/api/receiver/:id', async (req, res) => {
  const id = req.params.id;
  const { name, age, phone, bg, ml,gender, ddate, hospital } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `UPDATE receiver SET name = :name, age = :age, phone = :phone, bg = :bg, ml = :ml, gender = :gender, ddate = :ddate, hospital = :hospital WHERE id = :id`,
      { id, name, age, phone, bg, ml, gender, ddate, hospital },
      { autoCommit: true }
    );

    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

// Delete receiver table
app.delete('/api/receiver/:id', async (req, res) => {
  const id = req.params.id;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(`DELETE FROM receiver WHERE id = :id`, [id], { autoCommit: true });

    res.status(200).send('Data deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});













//crud operations for signup table

app.get('/api/signup/:email?', async (req, res) => {
  const { email } = req.params;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    let query = 'SELECT * FROM signup';
    let bindParams = [];

    if (email) {
      query += ' WHERE email = :email';
      bindParams.push(email);
    }

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      res.status(404).send('Data not found');
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


app.post('/api/signup', async (req, res) => {
  const { name, phone, email, p,cp } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `INSERT INTO signup (name, phone, email, p, cp) VALUES (:name, :phone, :email, :p, :cp)`,
      { name, phone, email, p, cp },
      { autoCommit: true }
    );

    res.status(201).send('Data added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});



app.put('/api/signup/:email', async (req, res) => {
  const email = req.params.email;
  const { name, phone, p,cp } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `UPDATE signup SET name = :name, phone = :phone, p = :p, cp = :cp WHERE email = :email`,
      {name, phone,email, p,cp },
      { autoCommit: true }
    );

    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});



app.delete('/api/signup/:email', async (req, res) => {
  const email = req.params.email;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(`DELETE FROM signup WHERE email = :email`, [email], { autoCommit: true });

    res.status(200).send('Data deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


app.post('/api/login', async (req, res) => {
  const { email, p } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT * FROM signup WHERE email = :email AND p = :p`,
      { email, p }
    );

    if (result.rows.length === 0) {
      res.status(401).send('Invalid email or password');
    } else {
      res.status(200).send('Login successful');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});








// crud operations for admin table

app.get('/api/admin/:email?', async (req, res) => {
  const { email } = req.params;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    let query = 'SELECT * FROM admin';
    let bindParams = [];

    if (email) {
      query += ' WHERE email = :email';
      bindParams.push(email);
    }

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      res.status(404).send('Data not found');
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


app.post('/api/admin', async (req, res) => {
  const { name, phone, email, p,cp } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `INSERT INTO admin (name, phone, email, p, cp) VALUES (:name, :phone, :email, :p, :cp)`,
      { name, phone, email, p, cp },
      { autoCommit: true }
    );

    res.status(201).send('Data added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});



app.put('/api/admin/:email', async (req, res) => {
  const email = req.params.email;
  const { name, phone, p,cp } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `UPDATE admin SET name = :name, phone = :phone, p = :p, cp = :cp WHERE email = :email`,
      {name, phone,email, p,cp },
      { autoCommit: true }
    );

    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});



app.delete('/api/admin/:email', async (req, res) => {
  const email = req.params.email;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    await connection.execute(`DELETE FROM admin WHERE email = :email`, [email], { autoCommit: true });

    res.status(200).send('Data deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


app.post('/api/adminlogin', async (req, res) => {
  const { email, p } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT * FROM admin WHERE email = :email AND p = :p`,
      { email, p }
    );

    if (result.rows.length === 0) {
      res.status(401).send('Invalid email or password');
    } else {
      res.status(200).send('Login successful');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
