import { Layout } from '@/conponents/Layout';
import Button from '@material-ui/core/Button';

export const HomePage = ({}) => {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <Layout>
                <Button variant="contained" color="primary">
                  {`What's up World`}
                </Button>
            </Layout>
        </div>
    );
}