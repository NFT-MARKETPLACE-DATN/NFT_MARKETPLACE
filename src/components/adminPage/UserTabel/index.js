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
  Checkbox,
  Avatar,
  Tooltip,
  Button
} from '@mui/material'
import UserTabelStyle from "./UserTabelStyle";
import { MaterialReactTable } from 'material-react-table';
import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { size } from 'lodash';
import tooltipIcon from '../../../images/logos/tooltip.svg';
import BaseSwitch from '../../../containers/BaseSwitch';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; 
import { debounce } from 'lodash';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import SearchIcon from '../../../images/logos/SearchIcon.svg';
import {isArrayLength , arrayObjectOfUniques, formatDateByTz, formatString } from "../../../utils/helpers";
import NoDataComponent from '../../../containers/NoData';
import { getTransactionUser,getUserByAdmin, updateRoleUser  } from "../../../redux/actions";
import { toast } from 'react-toastify';

const initialPagination= { pageIndex:1,pageSize:20};
const UserTabel = () =>{
    const {
        accountInfo={},
      } = useSelector(state => state.globalState || {});
    const {
      //  dataUser = [],
    //    dataNftHolding=[],
    //    totalRecordsNft
    } = useSelector(state => state.accountState || {});
    const {
      loading,
      dataUser=[],
      isUpdateStatus
    } = useSelector(state => state.adminState || {});
    console.log(dataUser);
    const [pagination, setPagination] = useState(initialPagination);
    const [screenEl, setScreenEl] = useState({});
    const [dataUserState, setDataUserState] = useState([]);
    const [showIsAmin, setShowIsAmin] = useState(false);
    const [typePrice,setTypePrice] = useState("DESC");
    const [searchTerm,setSearchTerm] = useState(null);
    const [searchKey, setSearchKey] = useState(1);
    const [visibleColumn, setVisibleColumn] = useState({
      isAdmin: false,
      address: true,
      balance: true,
      countNft: true,
    });
    const dispatch = useDispatch();

    const handlerSearch = debounce((envent)=>{
      const {value} = envent.target;
      const trimmedValue = value.trim();
      setSearchTerm(trimmedValue);
      setPagination(initialPagination);
      // debouncedApiCall(trimmedValue);
      // console.log(value);
    },1000);
    const handleChangeOrderForCreated = (event) =>{
      setTypePrice(event.target.value);
      setPagination(initialPagination);
      setSearchTerm(null);
      setSearchKey(2);
      // console.log(event.target.value);
    };
    const columns = [
      {
        accessorKey: 'isAdmin',
        header: (
          <div className="flex">
            <div className="label">Admin</div>
            <Tooltip
              title="User is Admin"
              placement="top"
              arrow
            >
              <img src={tooltipIcon} alt="tooltip-icon" width={15} height={15} />
            </Tooltip>
          </div>
        ),
        size: 50,
        Cell: ({ row }) => (
          <Box>
            <Checkbox
              checked={row.original.isAdmin == 1 ? true : false}
              onChange={event => {
                if(row.original.isAdmin == 1){
                  toast.error("Cannot change admin",{
                    autoClose: 1000, // Thời gian hiển thị (ms)
                  })
                  return
                }
                dispatch(
                  updateRoleUser({
                    userID:row.original.id,
                    isRole:1

                    })
                )
              }}
              icon={
                <CheckBoxOutlineBlankOutlinedIcon
                  sx={{
                    '& path': { fill: '#707070' },
                  }}
                />
              }
              checkedIcon={
                <CheckBoxOutlinedIcon
                  sx={{
                    '& path': { fill: '#004B9E' },
                  }}
                />
              }
            />
          </Box>
        ),
      },
      {
          accessorKey: 'address',
          header: 'Address',
          size: 120,
          Cell: ({ row }) => (
            <Box >
                 <Tooltip   
                    title="View address in explorer solana"
                    placement="top"
                    arrow>
                    <a 
                        href={`https://explorer.solana.com/address/${row.original.address}?cluster=testnet`}//devnet
                        target="_blank"
                        role="button"
                        tabIndex="0"
                        style={{ color: 'black',textDecoration:'none' }}
                    >
                        {row.original.address && `${formatString(row.original.address)}` }
                    </a>
                </Tooltip>
            </Box>
          ),
        },
        {
            accessorKey: 'balance',
            header: 'SOL balance',
            size: 180,
            Cell: ({ row }) => (
              <Box className='balance'>
                 <div className="balance">
                  {row.original.balance}
                </div>
              </Box>
            )
          },
          {
            accessorKey: 'nftCount',
            header: 'NFT Quantity',
            size: 200,
            Cell: ({ row }) => (
              <Box className='nftCount'>
                 <div className="nftCount">
                  {row.original.nftCount}
                </div>
              </Box>
            )
          },
      ];
    
    const data = [
      {
        isAdmin:2,
        address:'asdfsadfdsaf',
        balance: "3232323",
        countNft:"fasdfsdf"
      }
    ]
    useEffect(()=>{
      getDataUser(1);
      setPagination({ ...pagination, pageIndex: 1});
    },[searchTerm,typePrice,isUpdateStatus]);

    useEffect(() => {
        handleDataUser();
    }, [dataUser]);;  
    const handleDataUser =()=>{
        if(isArrayLength(dataUser,1)){
            setDataUserState((preValue)=>pagination?.pageIndex === 1 ? [...dataUser] : arrayObjectOfUniques([...preValue,...dataUser],'id'))
        }
        // else if(dataUser.length == 0){
        //   setDataUserState([])
        // }
        else{
          if(dataUser !== null && isArrayLength(dataUserState,1)){
            setDataUserState([])
          }
        }
      };
    const getDataUser = (pageIndex)=>{
        dispatch(
          getUserByAdmin({
                pageIndex: pageIndex || pagination.pageIndex ,
                pageSize:pagination.pageSize,
                order:typePrice,
                search:searchTerm
            })
        )
    }
    const fetchNextPage =()=>{
        if(isArrayLength(dataUser, pagination?.pageSize)){
          getDataUser(pagination?.pageIndex + 1)
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
          if (isScrollEnd && !loading && isArrayLength(dataUser, pagination?.pageSize)) {
            debounceNextPage();
          }
        }
    };
    return (
    <UserTabelStyle>
      <div className='tabAdmin'>
          </div>
          <div className='userTabel'>
            <div className='headerTabel'>
              <div className="flex onOffSwitch">
                <div className="onOffText">Add Admin</div>
                <BaseSwitch
                  checked={showIsAmin}
                  onChange={event => {
                    setShowIsAmin(event.target.checked);
                  }}
                />
              </div>
              <div className='search-accountpage'>
                  <TextField
                      key={searchKey}
                      className={`searchInput`}
                      fullWidth
                      hiddenLabel
                      placeholder="Search for name"
                      name="search"
                      type="text"
                      variant="outlined"
                      margin="dense"
                      autoComplete="off"
                      defaultValue={searchTerm || null}
                      // value={searchTerm === null ? '' : searchTerm}
                      onChange={handlerSearch}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              {searchTerm ? 
                                <>
                                </>
                                :
                                <img src={SearchIcon} alt="search-icon" />
                              }
                             
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                </div>
                <div className='arrow_price'>
                  <FormControl >
                    <Select
                      value={typePrice}
                      onChange={handleChangeOrderForCreated}
                      className="typeValue"
                      IconComponent={KeyboardArrowDownRoundedIcon}
                    >
                      <MenuItem value={'DESC'}>Recently created</MenuItem>
                      <MenuItem value={'ASC'}>Created earliest</MenuItem>
                    </Select>
                    </FormControl>
                </div> 
            </div>
         
            <MaterialReactTable
            columns={columns}
            data={dataUserState || []}
            enableExpandAll={false}
            enableTopToolbar={false}
            enableSorting={false}
            initialState={{}}
            renderEmptyRowsFallback={()=>(<NoDataComponent isShowText={true}/>)}
            enablePagination={false}
            state={{
              expanded: true,
              columnVisibility: {
                ...visibleColumn,
                'mrt-row-expand': false,
                isAdmin: showIsAmin
              },
              pagination,
            }}
            muiTableContainerProps={{
              sx: {
                maxHeight: '620px',
              },
              onScroll: fetchMoreOnBottomReached
            }}
          //   rowCount={totalRecordsTransaction}
            manualPagination
            // onPaginationChange={(valuee)=>{console.log({valuee})}}
            // localization={MRT_Localization_JA}
            muiTablePaginationProps={{
              rowsPerPageOptions: [20],
            }}
            onColumnVisibilityChange={setVisibleColumn}
            positionExpandColumn="first"
            renderDetailPanel={({ row }) => (
              <div className="transactionDateTime">
                {formatDateByTz(row.original.created, 'YYYY/MM/DD HH:mm')}{' '}
              </div>
            )}
            muiTableBodyProps={
              {
                // children: 'Custom Table Body',
                // sx: () => ({
                //   '& tr:nth-child(even)': {
                //     backgroundColor: '#ccc',
                //   },
                // }),
              }
            }
            enableRowSelection={false}
            enableSelectAll={false}
            setRowSelection={setShowIsAmin}
            muiSelectCheckboxProps={{
              checkedIcon: ( <CheckBoxOutlinedIcon sx={{ '& path': { fill: '#004B9E' } }}/> ),
            }}
            enableFullScreenToggle={false}
            enableDensityToggle={false}
            enableColumnActions={false}
            enableColumnFilters={false}
            enableGlobalFilter={false}
            // enableHiding={!!matches}
            displayColumnDefOptions={{
              'mrt-row-actions': {
                size: 20,
                sx: {
                  cursor: 'pointer',
                },
              },
              'mrt-row-expand': {
                size: 20,
                header: <></>,
                muiTableHeadCellProps: {
                  align: 'right',
                  padding:'0px 8px 0px 8px'
                },
                muiTableBodyCellProps: {
                  align: 'right',
                },
              },
              'mrt-row-select': {
                header: (
                  <div className="flex">
                    <div className="label">Admin</div>
                    <Tooltip
                      title="User has admin"
                      placement="top"
                      arrow
                    >
                      <img
                        src={tooltipIcon}
                        alt="tooltip-icon"
                        width={12}
                        height={12}
                      />
                    </Tooltip>
                  </div>
                ),
              },
            }}
            muiTableBodyCellProps={{
              sx: {
                fontWeight: 'normal',
                fontSize: 20,
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#707070',
                '& .Mui-TableHeadCell-Content': {
                  justifyContent: 'space-between',
                },
              },
            }}

          />
        </div>
    </UserTabelStyle>
)
}

export default React.memo(UserTabel);