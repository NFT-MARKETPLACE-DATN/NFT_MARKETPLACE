import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  Drawer,
  Menu,
  Box,
  Grid,
  Collapse,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  CardHeader,
  CardMedia,
  Avatar,
  Tooltip,
  Button
} from '@mui/material'
import TransactionStyle from "./TransactionStyle";
import { MaterialReactTable } from 'material-react-table';
import NoDataComponent from '../../../containers/NoData';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionUser  } from "../../../redux/actions";
import {isArrayLength , arrayObjectOfUniques, formatDateByTz} from "../../../utils/helpers"
import _debounce from 'lodash/debounce';
import { size } from 'lodash';
// import { debounce } from 'lodash';
const initialPagination= { pageIndex:1,pageSize:20};
const Transaction = ({order, search}) =>{
  
    const {
        accountInfo={},
      } = useSelector(state => state.globalState || {});
    const {
       loading,
       dataTransacitonUser = [],
    //    dataNftHolding=[],
    //    totalRecordsNft
    } = useSelector(state => state.accountState || {});
    const [pagination, setPagination] = useState(initialPagination);
    const [screenEl, setScreenEl] = useState({});
    const [dataTransactionState, setDataTransactionState] = useState([]);
    const dispatch = useDispatch();

    const columns = [
        {
          accessorKey: 'actionName',
          header: 'Action',
          size: 50,
          Cell: ({ row }) => (
            <Box>
              <div
                className={
                    row.original.actionName === 'Create' || row.original.actionName === "Listed" || row.original.actionName === "Buy"
                    ? 'typeTransactionCell buy'
                    : 'typeTransactionCell sell'
                }
              >
                {row.original.actionName}
              </div>
            </Box>
          ),
        },
        {
          accessorKey: 'nftName',
          header: 'NFT',
          size: 120,
          Cell: ({ row }) => (
            <Box >
              <div className="nftName">
                {row.original.nftName}
              </div>
            </Box>
          ),
        },
        {
            accessorKey: 'nftImage',
            header: 'Image',
            size: 180,
            Cell: ({ row }) => (
              <Box className='nftImgae'>
                  <img
                    alt={row.original.nftImage}
                    src={row.original.nftImage}
                    loading="lazy"
                    className="image"
                />
              </Box>
            )
          },
          {
            accessorKey: 'txID',
            header: 'Transaction',
            size: 200,
            Cell: ({ row }) => (
              (row.original.actionName === 'Create' || row.original.actionName === 'Buy' || row.original.actionName === 'Listed' || row.original.actionName === 'Sell' ) &&
              <Box className='transaction'>
                <Tooltip   
                    title="View Transaction in explorer"
                    placement="top"
                    arrow>
                    <a 
                        href={`https://explorer.solana.com/tx/${row.original.txID}?cluster=testnet`}//devnet
                        target="_blank"
                        role="button"
                        tabIndex="0"
                        style={{ color: 'black',textDecoration:'none' }}
                    >
                        {row.original.txID ? (size(row.original.txID)>50 ? `${row.original.txID.substring(0, 50)}...` : row.original.txID)  : null }
                    </a>
                </Tooltip>
    
              </Box>
            )
          },
      ];
    // useEffect(() => {
    //     getDataTransaction(1);
    //   }, []);
    useEffect(()=>{
      getDataTransaction(1);
      setPagination({ ...pagination, pageIndex: 1});
    },[order,search])
    useEffect(() => {
        handleDataTransaction();
    }, [dataTransacitonUser]);;  
    const handleDataTransaction =()=>{
        if(isArrayLength(dataTransacitonUser,1)){
            setDataTransactionState((preValue)=>pagination?.pageIndex === 1 ? [...dataTransacitonUser] : arrayObjectOfUniques([...preValue,...dataTransacitonUser],'id'))
        }
        // else if(dataTransacitonUser.length == 0){
        //   setDataTransactionState([])
        // }
        else{
          if(dataTransacitonUser !== null && isArrayLength(dataTransactionState,1)){
            setDataTransactionState([])
          }
        }
      };

    const getDataTransaction = (pageIndex)=>{
        dispatch(
            getTransactionUser({
                userID:accountInfo.id,
                pageIndex: pageIndex || pagination.pageIndex ,
                pageSize:pagination.pageSize,
                order:order,
                search:search
            })
        )
    }
    const fetchNextPage =()=>{
        if(isArrayLength(dataTransacitonUser, pagination?.pageSize)){
          getDataTransaction(pagination?.pageIndex + 1)
          setPagination((prevValue)=>({...prevValue, pageIndex: prevValue?.pageIndex + 1}))
        }
      };
    const debounceNextPage = _debounce(()=>{fetchNextPage()},500,{leading:true})
    const fetchMoreOnBottomReached =  (containerRefElement) => {
        const containerRefElementTarget = containerRefElement?.target
        if (containerRefElementTarget) {
          const { scrollLeft, scrollHeight, scrollTop, clientHeight, offsetHeight } = containerRefElementTarget;
          setScreenEl((prevValue)=>({...prevValue, scrollLeft, scrollTop}))
          if(screenEl?.scrollLeft !== scrollLeft) return
          //once the user has scrolled within 400px of the bottom of the table, fetch more data if we can
          const isScrollEnd = (scrollHeight - scrollTop) < clientHeight + 80;
          if (isScrollEnd && !loading && isArrayLength(dataTransacitonUser, pagination?.pageSize)) {
            debounceNextPage();
          }
        }
    };
    return (
    <TransactionStyle>
      {/* <dvi className="tableTransaction"> */}
        <MaterialReactTable
          columns={columns}
          data={dataTransactionState || []}
          enableExpandAll={false}
          enableTopToolbar={false}
          enableSorting={false}
          initialState={{}}
          renderEmptyRowsFallback={()=>(<NoDataComponent isShowText={true}/>)}
          enablePagination={false}
          state={{
            expanded: true,
            columnVisibility: {
            //   ...visibleColumn,
              'mrt-row-expand': false,
            //   onOffTransaction:
            //     localStorage.getItem('token_connect') ||
            //     localStorage.getItem('token')
            //       ? showOnOffTransaction
            //       : false,
            },
            pagination,
          }}
          muiTableContainerProps={{
            sx: {
              maxHeight: '500px',
            },
            onScroll: fetchMoreOnBottomReached
          }}
          manualPagination
          muiTablePaginationProps={{
            rowsPerPageOptions: [20],
          }}
        //   onColumnVisibilityChange={setVisibleColumn}
        //   positionExpandColumn="first"
          renderDetailPanel={({ row }) => (
            <div className="transactionDateTime">
              {formatDateByTz(row.original.created, 'YYYY/MM/DD HH:mm')}{' '}
              {/* <span className="transactionNotes">
                {size(row.original.notes) > 64
                  ? `${row.original.notes.substring(0, 64)}...`
                  : row.original.notes}
              </span> */}
            </div>
          )}
          muiTableBodyProps={
            {
        //       children: 'Custom Table Body',
        //       sx: () => ({
        //         '& tr:nth-child(even)': {
        //           backgroundColor: '#ccc',
        //         },
        //       }),
            }
          }
          enableRowSelection={false}
          enableSelectAll={false}
        //   setRowSelection={setShowOnOffTransaction}
        //   muiSelectCheckboxProps={{
        //     checkedIcon: ( <CheckBoxOutlinedIcon sx={{ '& path': { fill: '#004B9E' } }}/> ),
        //   }}
          enableFullScreenToggle={false}
          enableDensityToggle={false}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableGlobalFilter={false}
          muiTableBodyCellProps={{
            sx: {
              fontWeight: 'normal',
              fontSize: 16,
            },
          }}
          muiTableHeadCellProps={{
            sx: {
              fontWeight: 'normal',
              fontSize: 14,
              color: '#707070',
              '& .Mui-TableHeadCell-Content': {
                justifyContent: 'space-between',
              },
            },
          }}
        />
        {/* </dvi> */}

    </TransactionStyle>
)
}

export default React.memo(Transaction);