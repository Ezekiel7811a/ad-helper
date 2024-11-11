import { ArrowRight } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const HypothesisList = ({ hypotheses }: { hypotheses: string[] }) => {
  return (
    <List>
      {hypotheses.map((hypothesis) => (
        <ListItem key={hypothesis}>
          <ListItemIcon>
            <ArrowRight />
          </ListItemIcon>
          <ListItemText>{hypothesis}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default HypothesisList;
