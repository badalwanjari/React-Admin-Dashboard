import React, { useState } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";

const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat,
}) => {
    const theme = useTheme();
    const [isExpanded, setExpanded] = useState(false);
    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: theme.palette.secondary[200],
                    }}
                    gutterBottom
                >
                    {category}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography
                    sx={{ mb: "1.5rem" }}
                    color={theme.palette.secondary[400]}
                >
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating value={rating} readOnly></Rating>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setExpanded(!isExpanded)}
                >
                    see more...
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{ color: theme.palette.neutral[300] }}
            >
                <Box p="1rem">
                    <Typography>id : {_id}</Typography>
                    <Typography>Supply Left : {supply}</Typography>
                    <Typography>
                        Yearly Sales This Year : {stat[0].yearlySalesTotal}
                    </Typography>
                    <Typography>
                        Yearly Units Sold This Year :{" "}
                        {stat[0]?.yearlyTotalSoldUnits}
                    </Typography>
                </Box>
            </Collapse>
        </Card>
    );
};

function Products() {
    const { data, isLoading } = useGetProductsQuery();
    const isNonMobile = useMediaQuery("(min-width:1000px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Products" subtitle="See your product list." />
            {data || !isLoading ? (
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="1.25rem"
                    columnGap="1.33%"
                    sx={{
                        "& > div": {
                            gridColumn: isNonMobile ? undefined : "span 4",
                        },
                    }}
                >
                    {data.map(
                        ({
                            _id,
                            name,
                            description,
                            price,
                            rating,
                            category,
                            supply,
                            stat,
                        }) => (
                            <Product
                                key={_id}
                                _id={_id}
                                name={name}
                                description={description}
                                price={price}
                                rating={rating}
                                category={category}
                                supply={supply}
                                stat={stat}
                            />
                        )
                    )}
                </Box>
            ) : (
                <h1>Loading...</h1>
            )}
        </Box>
    );
}

export default Products;
