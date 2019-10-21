#include <iostream>
using namespace std;
class Node
{
public:
  int data;
  Node * Left;
  Node * Right;
Node()
{
    data = 0;
    Left = NULL;
    Right = NULL;
}

};

class DoublyLL
{
public:
  int count;
  Node * LeftHead;
  Node * RightHead;

  DoublyLL()
  {
    count = 0;
    LeftHead = NULL;
    RightHead = NULL;
  }

  void print()
  {
    if (LeftHead != NULL && RightHead != NULL)
    {
      Node * ptr = LeftHead;
      cout << ptr->data << endl;
      while (ptr->Right != NULL)
      {
        ptr = ptr->Right;
        cout << ptr->data << endl;
      }
    }
  }
  void insertH(int l)
  {
    Node * ptr = new Node();
    ptr->data = l;
    ptr->Left = NULL;
    ptr->Right = NULL;
    if (LeftHead == NULL && RightHead == NULL)
    {
      RightHead = ptr;
      LeftHead = ptr;
    }
    else
    {
      Node * tptr = LeftHead;
      tptr->Left = ptr;
      ptr->Right = tptr;
      LeftHead = ptr;
    }
  }
  void insertT(int l)
  {
    Node * ptr = new Node();
    ptr->data = l;
    ptr->Left = NULL;
    ptr->Right = NULL;
    if (LeftHead == NULL && RightHead == NULL)
    {
      RightHead = ptr;
      LeftHead = ptr;
    }
    else
    {
      Node * tptr = RightHead;
      tptr->Right = ptr;
      ptr->Left = tptr;
      RightHead = ptr;
    }
  }
  void insertAt(int l, int index)
  {
    if (index <= 0)
    {
      insertH(l);
    }
    else if (index >= count)
    {
      insertT(l);
    }
    else
    {
      Node * ptr = new Node();
      ptr->data = l;
      Node * tptr = LeftHead;
      for (int i = 0; i < index - 1; i++)
      {
        tptr = tptr->Right;
      }
      ptr->Right = tptr->Right;
      tptr->Right->Left = ptr;
      ptr->Left = tptr;
      tptr->Right = ptr;
    }
  }
  void Delete(int l)
  {
    Node * tptr = LeftHead;
    if (tptr->data == l)
    {
      tptr = tptr->Right;
      tptr->Left->Right = NULL;
      tptr->Left = NULL;
      LeftHead = tptr;
      tptr = NULL;
      return;
    }
    tptr = RightHead;
    if (tptr->data == l)
    {
      tptr = tptr->Left;
      RightHead = tptr;
      tptr->Right->Left = NULL;
      tptr->Right = NULL;
    }
    else
    {
      tptr = LeftHead->Right;
      while (tptr)
      {
        if (tptr->data == l)
        {
          tptr->Left->Right = tptr->Right;
          tptr->Right->Left = tptr->Left;
          tptr->Right = NULL;
          tptr->Left = NULL;
          return;
        }
        else
        {
          tptr = tptr->Right;
        }
      }
    }
  }

  int search(int l)
  {
    int i = 0;
    Node * temp = LeftHead;
    while (temp != NULL)
    {
      if (temp -> data == l)
      {

        return i;
      }
      temp = temp -> Right;
      i++;
    }

    return -1;
  }
};

int main()
{
  DoublyLL list;
  list.insertT(1);
  list.insertT(2);
  list.insertT(-1);
  list.insertT(-2);
  list.insertT(3);
  list.insertT(100);
  cout<<list.search(100)<<endl;



  return 0;
}
