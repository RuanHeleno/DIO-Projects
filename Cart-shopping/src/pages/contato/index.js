import { React, useEffect, useState } from 'react'
import { Grid, Button, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    grid: {
        marginTop: 100
    },
    text: {
        marginBottom: 50,
        backgroundColor: 'white'
    },
  })

const Contatos = () => {
    const classes = useStyles()

    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([])
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [validator, setValidator] = useState(false)
    const [success, setSuccess] = useState(false)
    const [render, setRender] = useState(false)

    useEffect(() => {
        async function Response() {
            const response = await fetch(url)
            const data = await response.json()
            setMessage(data)
        }

        Response()
    }, [render])

    const sendMessage = () => {
        setValidator(false)
        if(author.length <= 0 || content.length <= 0) return setValidator(!validator)

        fetch(url, {
            "method": "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: author,
                message: content
            })
        }).then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 5000)
            }
        })

        setAuthor('')
        setContent('')
    }

    return (
        <>
            <Grid container direction="row" className={classes.grid}>
                <TextField id="name" label="Nome" value={author} 
                    onChange={(event) => {setAuthor(event.target.value)}} 
                    fullWidth className={classes.text}
                />
                <TextField id="message" label="Mensagem" value={content} 
                    onChange={(event) => {setContent(event.target.value)}} 
                    fullWidth className={classes.text}
                />
            </Grid>

            {validator &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Por favor preencha todos os campos!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            {success &&
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Mensagem enviada!</strong>
            </div>
            }
            <Button onClick={sendMessage} className="mt-2 mb-5" variant="contained" color="primary">
                Enviar
            </Button>
            
            {message.map((content => {
                return (
                    <div className="card mt-3" key={content.id}>
                        <div className="card-body">
                            <h5 className="card-title">{content.email}</h5>
                            <p className="card-text">{content.message}</p>
                            <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                        </div>
                    </div>
                )
            }))}
        </>
    )
}

export default Contatos