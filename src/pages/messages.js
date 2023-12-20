import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { applyPagination } from "src/utils/apply-pagination";
import { MessagesOverView } from "src/sections/messages/MessagesOverView";

const now = new Date();

const data = [
  {
    id: "5e887b209c28ac3dd97f6db5",
    fileName: "European ATM Master Plan Executive summary (spanish)",
    DateAdded: "24-05-2017",
    FileSize: "634.54KB",
  },
  {
    id: "5e887b209c28ac3dd97f6db6",
    fileName: "European ATM Master Plan Executive summary (spanish)",
    DateAdded: "24-05-2017",
    FileSize: "634.54KB",
  },
  {
    id: "5e887b209c28ac3dd97f6db7",
    fileName: "European ATM Master Plan Executive summary (spanish)",
    DateAdded: "24-05-2017",
    FileSize: "634.54KB",
  },
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Messages | GACA</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <MessagesOverView
              data={[
                {
                  id: "213213",
                  name: "Hussan",
                  email: "Hussan@gmail.com",
                  feedbackType: "Recomendation",
                  status: "opened",
                },
                {
                  id: "21d3223",
                  name: "Ahmad",
                  email: "Ahmad@gmail.com",
                  feedbackType: "others",
                  status: "UnRead",
                },
                {
                  id: "df2133",
                  name: "Mike",
                  email: "Mike@gmail.com",
                  feedbackType: "Recomendation",
                  status: "UnRead",
                },
                {
                  id: "2133g",
                  name: "Mike",
                  email: "Mike@gmail.com",
                  feedbackType: "Recomendation",
                  status: "UnRead",
                },
                {
                  id: "2131123ads",
                  name: "Mike",
                  email: "Mike@gmail.com",
                  feedbackType: "Recomendation",
                  status: "opened",
                },
                {
                  id: "213323d",
                  name: "Mike",
                  email: "Mike@gmail.com",
                  feedbackType: "Recomendation",
                  status: "UnRead",
                },
              ]}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
