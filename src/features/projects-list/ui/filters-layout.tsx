import { Box, Button, Card, Flex, Grid } from '@radix-ui/themes';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { ReactNode, useState } from 'react';

interface FiltersLayoutProps {
    textField: ReactNode;
    filters: ReactNode;
}

export const FiltersLayout = ({ textField, filters }: FiltersLayoutProps) => {
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const toggleFilterVisibility = () => setFilterIsOpen((prev) => !prev);

    return (
        <Box>
            <Flex align="center" gap="3">
                {textField}
                <Button variant="outline" onClick={toggleFilterVisibility}>
                    <MixerHorizontalIcon />
                    Фильтр
                </Button>
            </Flex>
            {filterIsOpen && (
                <Card mt="3">
                    <Grid
                        gap="3"
                        columns={{ initial: '1', sm: '3', md: '3' }}
                        width="auto"
                    >
                        {filters}
                    </Grid>
                </Card>
            )}
        </Box>
    );
};
