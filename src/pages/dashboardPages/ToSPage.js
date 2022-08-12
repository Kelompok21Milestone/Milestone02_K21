import '../../components/dashboard/background/DashboardBackground.css';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import { Grid, GridItem } from '@chakra-ui/react'
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';
import ToS from '../../components/ToS/ToS';

const ToSPage = () => {
  return (
    <div>
      <div className='dashboard-bg-image'>
        <Grid
          templateAreas={`"header header"
                          "nav main"
                          `}
          gridTemplateRows={'10vh'}
          gridTemplateColumns={'250px auto'}
          h='full'
          w='full'
          color='blackAlpha.700'
        >
          <GridItem area={'header'}>
            <DashboardNavigationBar />
          </GridItem>
          <GridItem area={'nav'}>
            <SideBar/>
          </GridItem>
          <GridItem p={4} area={'main'}>
            <ToS/>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default ToSPage;