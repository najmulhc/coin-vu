import { Button } from "../Styled-Components/Buttons.styled";
import { Card } from "../Styled-Components/Card.styled";
import { MainContainer } from "../Styled-Components/Containers.styled";
import { H2, P } from "../Styled-Components/Typography.styled";

const Dashboard = () => {
  return (
    <MainContainer>
      <Card>
        <H2>Welcome To the card!</H2>
        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          consequatur quod temporibus nobis assumenda harum, cupiditate
          voluptatem, velit quia labore quibusdam vel deleniti itaque porro
          delectus unde voluptas beatae magnam sed error sapiente, molestias
          aliquid.
        </P>
        <Button > Click Me!</Button>
      </Card>
      <Card>
        <H2>Welcome To the card!</H2>
        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          consequatur quod temporibus nobis assumenda harum, cupiditate
          voluptatem, velit quia labore quibusdam vel deleniti itaque porro
          delectus unde voluptas beatae magnam sed error sapiente, molestias
          aliquid.
        </P>
      </Card>
      <Card>
        <H2>Welcome To the card!</H2>
        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          consequatur quod temporibus nobis assumenda harum, cupiditate
          voluptatem, velit quia labore quibusdam vel deleniti itaque porro
          delectus unde voluptas beatae magnam sed error sapiente, molestias
          aliquid.
        </P>
      </Card>
    </MainContainer>
  );
};

export default Dashboard;
