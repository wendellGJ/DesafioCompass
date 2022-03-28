import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import HomeIcon from '@mui/icons-material/Home';
export default function Sidebar() {
  const classes = useStyles();
  const history = useHistory();

  let selectedHome = false;
  let selectedCadastro = false;
  let selectedListagem = false;

  const getLastItem = (thePath) => thePath.substring(thePath.lastIndexOf('/') + 1);
  const page = getLastItem(document.URL);
  switch (page) {
    case 'logs':
      selectedCadastro = true;
      break;
    case 'lia':
      selectedListagem = true;
      break;
    default:
      selectedHome = true;
  }

  const handlerClickHome = () => {
    history.push('/');
  };
  const handlerCadastro = () => {
    history.push('/cadastro');
  };
  const handlerClickListagem = () => {
    history.push('/listagem');
  };

  return (
    <>
      <Grid>
        <Typography className={classes.text}>Cadastro de Empresas</Typography>
        <List>
          <ListItem button className={selectedHome ? classes.bg : classes.none} onClick={handlerClickHome}>
            <ListItemIcon>
              <HomeIcon className={selectedHome ? classes.img : classes.none} />
            </ListItemIcon>
            <ListItemText>
              <Typography>Home</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={selectedCadastro ? classes.bg : classes.none} onClick={handlerCadastro}>
            <ListItemIcon>
              <HomeIcon className={selectedCadastro ? classes.img : classes.none} />
            </ListItemIcon>
            <ListItemText>
              <Typography>Cadastro de empresas</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={selectedListagem ? classes.bg : classes.none} onClick={handlerClickListagem}>
            <ListItemIcon>
              <HomeIcon className={selectedListagem ? classes.img : classes.none} />
            </ListItemIcon>
            <ListItemText>
              <Typography>Listagem de empresas</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </>
  );
}
