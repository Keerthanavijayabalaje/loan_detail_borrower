const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertloan_detail_borrower = (request, response) => {
const {id, creditscore, dti, fullname, address_id, loan_detail_id, created, updated} = request.body
  pool.query( "INSERT INTO cbanc2.loan_detail_borrower (id, creditscore, dti, fullname, address_id, loan_detail_id, created, updated) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",[id, creditscore, dti, fullname, address_id, loan_detail_id, created, updated], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in loan_detail_borrower')
  })
}



module.exports = {
insertloan_detail_borrower
}
