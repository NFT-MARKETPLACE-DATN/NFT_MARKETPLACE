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
import NoDataComponent from '../../../containers/NoData';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionUser  } from "../../../redux/actions";
import {isArrayLength , arrayObjectOfUniques, formatDateByTz} from "../../../utils/helpers"
import _debounce from 'lodash/debounce';
import { size } from 'lodash';
import tooltipIcon from '../../../images/logos/tooltip.svg';
import BaseSwitch from '../../../containers/BaseSwitch';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; 
import { debounce } from 'lodash';
import SearchIcon from '../../../images/logos/SearchIcon.svg';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
const initialPagination= { pageIndex:1,pageSize:20};
const UserTabel = ({order, search}) =>{
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
    const [dataUserState, setDataUserState] = useState([]);
    const [showIsAmin, setShowIsAmin] = useState(false);
    const [typePrice,setTypePrice] = useState("DESC");
    const [searchTerm,setSearchTerm] = useState(null);
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
      // setSearchTerm(null);
      // setSearchKey(6);
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
              <img src={tooltipIcon} alt="tooltip-icon" width={12} height={12} />
            </Tooltip>
          </div>
        ),
        size: 50,
        Cell: ({ row }) => (
          <Box>
            <Checkbox
              checked={row.original.isAdmin == 1 ? true : false}
              onChange={event => {
                console.log("fasdfsadf");
                // dispatch();
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
              <div className="address">
                {row.original.address}
              </div>
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
            accessorKey: 'countNft',
            header: 'NFT',
            size: 200,
            Cell: ({ row }) => (
              <Box className='countNft'>
                 <div className="countNft">
                  {row.original.countNft}
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
    // useEffect(()=>{
    //   getDataTransaction(1);
    //   setPagination({ ...pagination, pageIndex: 1});
    // },[order,search])
    // useEffect(() => {
    //     handleDataTransaction();
    // }, [dataTransacitonUser]);;  
    const handleDataTransaction =()=>{
        if(isArrayLength(dataTransacitonUser,1)){
            setDataUserState((preValue)=>pagination?.pageIndex === 1 ? [...dataTransacitonUser] : arrayObjectOfUniques([...preValue,...dataTransacitonUser],'id'))
        }
        // else if(dataTransacitonUser.length == 0){
        //   setDataUserState([])
        // }
        else{
          if(dataTransacitonUser !== null && isArrayLength(dataUserState,1)){
            setDataUserState([])
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
                      // key={searchKey}
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
            data={data || []}
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
                fontSize: 16,
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                fontWeight: 'normal',
                fontSize: 12,
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